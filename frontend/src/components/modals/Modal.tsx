import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputDf from "../ui/inputs/InputDf";
import { ApolloError, useMutation } from "@apollo/client";
import { ADD_APPARTEMENT, UPDATE_APPARTEMENT } from "../../graphql/appartement";
import { useAppSelector } from "../../hooks/ReduxHooks";
import { errorTypes } from "../../../../constant/Errors";
import { ModalProps } from "../../interface/form";

export default function Modal({
  open,
  setOpen,
  form,
  setForm,
  selectedId,
  setSelectedId,
}: ModalProps) {
  const user = useAppSelector((state) => state.user);

  const cancelButtonRef = useRef(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement & {
      name: string;
      value: string;
      files?: FileList;
    };

    console.log(form);
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const [addAppartementMutation] = useMutation(ADD_APPARTEMENT);
  const [updateAppartementMutation] = useMutation(UPDATE_APPARTEMENT);

  async function addAppartement() {
    const {} = await addAppartementMutation({
      variables: {
        number: form.number,
        floor: form.floor,
        client: {
          full_name: form.full_name,
          phone_number: form.phone_number,
        },
        syndic_id: user.id,
      },
    });
  }

  async function UpdateaddAppartement() {
    const {} = await updateAppartementMutation({
      variables: {
        id: selectedId,
        number: form.number,
        floor: form.floor,
        client: {
          full_name: form.full_name,
          phone_number: form.phone_number,
        },
        syndic_id: user.id,
      },
    });
  }

  console.log(selectedId);

  const [validationErrors, setValidationErrors] = useState([]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      if (!selectedId) {
        await addAppartement();
      } else {
        await UpdateaddAppartement();
      }
      setOpen(false);
      setForm((prv) => ({
        ...prv,
        full_name: "",
        phone_number: "",
        number: "",
        floor: "",
      }));
      setSelectedId(null);
      setValidationErrors([]);
    } catch (error) {
      if (
        error instanceof ApolloError &&
        error.graphQLErrors &&
        error.graphQLErrors.length > 0
      ) {
        // Access the validationErrors from the first GraphQL error
        const firstGraphQLError = error.graphQLErrors[0];

        if (
          firstGraphQLError?.extensions?.kind === errorTypes.FORM_VALIDATION
        ) {
          // Update the state with validationErrors
          setValidationErrors(firstGraphQLError.extensions.validationErrors);
        }
      }
    }
  }

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 "
        initialFocus={cancelButtonRef}
        onClose={() => setOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:h- ">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <form onSubmit={handleSubmit} className="">
                        <h1 className="text-center text-DarkBlue mb-10 font-bold">
                          ADD APPARTEMENT
                        </h1>
                        <div className="flex gap-4">
                          <InputDf
                            validationErrors={validationErrors}
                            label="Client Name"
                            name="full_name"
                            onChange={handleChange}
                            value={form.full_name}
                          />
                          <InputDf
                            validationErrors={validationErrors}
                            label="client phoneNumber"
                            name="phone_number"
                            onChange={handleChange}
                            value={form.phone_number}
                          />
                        </div>
                        <div className="flex gap-4 pt-10">
                          <InputDf
                            validationErrors={validationErrors}
                            label="Appartement number"
                            name="number"
                            onChange={handleChange}
                            value={form.number}
                          />
                          <InputDf
                            validationErrors={validationErrors}
                            label="Appartement floor"
                            name="floor"
                            onChange={handleChange}
                            value={form.floor}
                          />
                        </div>
                        <div className="flex  justify-between gap mt-10">
                          <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 hover:shadow-md sm:mt-0 sm:w-auto"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                          >
                            Cancel
                          </button>
                          <button
                            type="submit"
                            className="inline-flex w-full justify-center rounded-md bg-DarkBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-DarkerBlue hover:shadow-md sm:ml-3 sm:w-auto"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

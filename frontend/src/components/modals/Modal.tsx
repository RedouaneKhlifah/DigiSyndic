import React, { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputDf from "../ui/inputs/InputDf";

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ open, setOpen }: ModalProps) {
  const cancelButtonRef = useRef(null);
  const [form, setForm] = useState({
    userName: "",
    phoneNumber: "",
    number: "",
    floor: "",
    status: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    const { name, value } = e.target as HTMLInputElement & {
      name: string;
      value: string;
      files?: FileList;
    };
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<SubmitEvent>) {
    e.preventDefault();
    
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
                      <form className="">
                        <h1 className="text-center text-DarkBlue mb-10 font-bold">
                          ADD APPARTEMENT
                        </h1>
                        <div className="flex gap-4">
                          <InputDf
                            label="Client Name"
                            name="userName"
                            onChange={handleChange}
                            value={form.userName}
                          />
                          <InputDf
                            label="client phoneNumber"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={form.phoneNumber}
                          />
                        </div>
                        <div className="flex gap-4 pt-10">
                          <InputDf
                            label="Appartement number"
                            name="number"
                            onChange={handleChange}
                            value={form.number}
                          />
                          <InputDf
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
                            type="button"
                            className="inline-flex w-full justify-center rounded-md bg-DarkBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-DarkerBlue hover:shadow-md sm:ml-3 sm:w-auto"
                            // onClick={handleSubmit}
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

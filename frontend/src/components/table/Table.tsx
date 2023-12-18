import { FaRegTrashAlt } from "react-icons/fa";
import { appartementT, tableProps } from "../../interface/form";
import { useMutation } from "@apollo/client";
import { DELETE_APPARTEMENT } from "../../graphql/appartement";
import { useAppSelector } from "../../hooks/ReduxHooks";

const people = [
  {
    id: "65800f0da3f97e79bfeb174b",
    full_name: "Redouane khlifah",
    phone_number: "063423247",
    number: "2",
    floor: "1",
    status: true,
    role: "Member",
  },
  {
    id: "65800f0da3f97e79bfeb174b",
    full_name: "saad nojila",
    phone_number: "063423247",
    number: "2",
    floor: "1",
    status: false,
    role: "Member",
  },
  // More people...
];

function Table({ setForm, setSelectedId, setOpen }: tableProps) {
  const user = useAppSelector((state) => state.user);

  function handleUpdate({
    id,
    full_name,
    phone_number,
    number,
    floor,
  }: appartementT) {
    setForm((prev) => ({
      ...prev,
      full_name,
      phone_number,
      number,
      floor,
    }));
    setOpen(true);
    setSelectedId(id);
  }

  const [DeleteAppartementMutation] = useMutation(DELETE_APPARTEMENT);

  async function deleteAppartment(id: string) {
    try {
      const { data } = await DeleteAppartementMutation({
        variables: {
          id: id,
          syndic_id: user.id,
        },
      });

      console.log("Deleted Appartment:", data); // Log the deleted apartment data
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="mt-8 flex flex-col w-[95%]">
        <div className="-my-2 -mx-4 overflow-x-auto ml-2">
          <div className="inline-block min-w-full py-2 align-middle ">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    ></th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                    >
                      NUMBER
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                    >
                      FLOOR
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900"
                    >
                      STATUS
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person, index) => (
                    <tr key={index}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 w-min ">
                        <div className="flex items-center gap-4  ">
                          <div className=" bg-DarkBlue rounded-lg w-7 h-7 "></div>
                          <div className="flex flex-col w-0 ">
                            <span className="text-xs block">
                              {person.full_name}
                            </span>
                            <span className="text-xs font-thin text-gray-500 block ">
                              {person.phone_number}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                        {person.number}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500">
                        {person.floor}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-xs text-gray-500 w-20 ">
                        <div
                          className={`${
                            person.status ? "bg-DarkBlue" : "bg-LighGray "
                          } rounded-lg shadow-sm duration-200 hover:shadow-md hover:bg-DarkerBlue text-white text-center py-2 w-20 cursor-pointer`}
                        >
                          {person.status ? "paid" : "unpaid"}
                        </div>
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-xs font-medium sm:pr-6 w-0  ">
                        <div className=" flex justify-center gap-8 w-min">
                          <div
                            onClick={() => handleUpdate(person)}
                            className="text-indigo-600 hover:text-indigo-900 cursor-pointer pl-6"
                          >
                            Edit
                          </div>
                          <div
                            onClick={() => {
                              deleteAppartment(person.id);
                            }}
                            className=" hover:text-indigo-900 cursor-pointer"
                          >
                            <FaRegTrashAlt />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;

export interface formState {
  full_name: string;
  phone_number: string;
  number: string;
  floor: string;
}

export type setFormState = React.Dispatch<React.SetStateAction<formState>>;

export interface formTypes extends selectedIdTypes {
  form: formState;
  setForm: setFormState;
}

export type selectedId = string | null;

export type setSelectedId = React.Dispatch<React.SetStateAction<selectedId>>;

export interface selectedIdTypes {
  selectedId: selectedId;
  setSelectedId: setSelectedId;
}

export interface tableProps {
  setForm: setFormState;
  setSelectedId: setSelectedId;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface appartementT {
  id: string;
  full_name: string;
  phone_number: string;
  number: string;
  floor: string;
  status: boolean;
}

export interface ModalButtonProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  form: formState;
  setForm: setFormState;
  selectedId: selectedId;
  setSelectedId: React.Dispatch<React.SetStateAction<selectedId>>;
}

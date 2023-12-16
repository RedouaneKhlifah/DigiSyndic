export interface AppartmentT {
    id: string;
    number: number;
    floor: number;
    client: ClientT;
    syndic_id: string;
}

interface ClientT {
    full_name: string;
    phone_number: string;
}

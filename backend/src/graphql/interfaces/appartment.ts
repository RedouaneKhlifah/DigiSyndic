export interface AppartmentT {
    id: string;
    number: string;
    floor: string;
    client: ClientT;
    syndic_id: string;
}

interface ClientT {
    full_name: string;
    phone_number: string;
}

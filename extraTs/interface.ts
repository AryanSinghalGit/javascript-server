interface Iuser {
    traineeEmail: string;
    reviewerEmail: string;
}
export { Iuser };
interface Iauthority {
    all: string[];
    read: string[];
    write: string[];
    delete: string[];
}
interface Ipermission {
    [key: string]: Iauthority;
}
export { Ipermission };
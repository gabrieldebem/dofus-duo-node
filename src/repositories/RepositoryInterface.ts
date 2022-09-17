export interface RepositoryInterface<T> {
    create(data: object): Promise<T>;
    update(id:number, data: object): Promise<T>;
    delete(model: T): Promise<void>;
    find(id: number): Promise<T>;
    findAll(): Promise<T[]>;
}
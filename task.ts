import TaskModel from "./task-model";

export interface IATasks {
    list: Array<TaskModel>;
}

export default interface ITasks extends IATasks {
    all(): Promise<Array<TaskModel>>;
    get(name: string): Promise<TaskModel>;
    getById?(id: string | number): Promise<TaskModel>;
    save(activity: TaskModel): Promise<TaskModel>;
    clear(): Promise<number>;
}
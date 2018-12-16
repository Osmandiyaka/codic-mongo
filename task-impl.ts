import ITasks from "./task";
import TaskModel from "./task-model";
import { Db, ObjectId } from 'mongodb';
import DbClient from "./db-client";

export default class TaskImpl implements ITasks {
    private taskModel: TaskModel[] = [];
    private db: Promise<Db>;
    private TASK_COLLECTION_NAME: string = 'tasks';

    constructor(private dbUrl: string) {
        this.db = DbClient.connect(this.dbUrl);
    }


    async all(): Promise<Array<TaskModel>> {
        const db = await this.db;
        return db.collection(this.TASK_COLLECTION_NAME).find().toArray();
    }

    async get(name: string): Promise<TaskModel> {
        const db = await this.db;
        return db.collection(this.TASK_COLLECTION_NAME).findOne({ name: name });
    }

    async save(activity: TaskModel): Promise<TaskModel> {
        const db = await this.db;
        const insert = await db.collection(this.TASK_COLLECTION_NAME).insert(activity);
        return activity;
    }

    async clear(): Promise<number> {
        const db = await this.db;
        const deletePromsie = await db.collection(this.TASK_COLLECTION_NAME).deleteMany({});
        return deletePromsie.deletedCount ? deletePromsie.deletedCount : 0;

    }

    async findById?(id: string | number): Promise<TaskModel> {
        const recordId = new ObjectId(id);
        const db = await this.db;
        return db.collection(this.TASK_COLLECTION_NAME).findOne({ _id: recordId });
    }

    public list = this.taskModel;


}
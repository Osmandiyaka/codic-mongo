import { MongoClient, Db } from "mongodb";

class DbClient {

    public db: Db | undefined;

    public async connect(connectionString: string): Promise<Db> {
        const db = await MongoClient.connect(connectionString);
        this.db = db.db('codic');
        return this.db;
    }
}

export default new DbClient();


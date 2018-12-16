import { expect } from "chai";
import TaskImpl from '../task-impl';
import TaskModel from "../task-model";


export const hello = () => 'Hello world!';

describe('Hello function', () => {

    it('should return hello world', async () => {
        const result = hello();
        expect(result).to.equal('Hello world!');
        const re = new TaskImpl("mongodb://localhost:27017/codic");
        const task: TaskModel = {
            name: 'test Task',
            id: 122333,
            config: { priority: 1, status: 1 },
            definition: {}
        };
        await re.save(task);
         const tasks = await re.all();
        console.log(tasks);
    });

});
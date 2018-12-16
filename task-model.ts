
export interface TaskConfig {

}

export interface TaskDefinition {

}

export default interface TaskModel {
    name: string;
    id?: string | number;
    config: TaskConfig;
    definition: string | TaskDefinition;
}
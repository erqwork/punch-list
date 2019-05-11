export class Punch {
    id: number;
    task: string;
    worker: string;
    creator?: string;
    createdOn: Date;
    due: Date;
    completed: boolean;
    taskState: string;
    completedOn?: Date;
    completedBy?: string;
    trade: string;
    severity: string;
    comments?: string;
    long?: string;
    lat?: string;
    selected?: string;
  }
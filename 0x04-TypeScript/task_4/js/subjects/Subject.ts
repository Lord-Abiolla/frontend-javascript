import { Teacher } from "./Teacher";

export class Subject {
    teacher!: Teacher;

    public setTeacher(teacher: Teacher) {
        this.teacher = teacher;
    }
}

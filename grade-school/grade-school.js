
export class GradeSchool {

    constructor() {
        this._members = new Map();
        this._reverseLookup = new Map();
    }
    roster() {
        return JSON.parse(JSON.stringify(Object.fromEntries(this._members)));
    }

    add(member, grade) {
        if(! this._members.has(grade)) {
            this._members.set(grade, []);
        }
        if(this._reverseLookup.has(member)) {
            const memberArray = this._members.get(this._reverseLookup.get(member));
            memberArray.splice(memberArray.indexOf(member), 1);
        }
        this._members.get(grade).push(member);
        this._members.get(grade).sort();
        this._reverseLookup.set(member, grade);
    }

    grade(filterGrade) {
        return this._members.has(filterGrade) ? [...(this._members.get(filterGrade))] : [];
    }
}

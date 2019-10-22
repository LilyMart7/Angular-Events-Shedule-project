import Skills from '../models/skills-model';


export class SkillsService{

private SkillsArr: Skills[] = [

    new Skills("HTML5", "Master"),
    new Skills("CSS3", "Basic"),
    new Skills("JavaScript", "Beginner"),

];

getAllSkills(){
    return this.SkillsArr.slice();
}

}
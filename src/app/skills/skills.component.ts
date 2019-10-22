import { Component, OnInit } from '@angular/core';
import Skills from '..//models/skills-model';
import {SkillsService} from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  SkillsArr: Skills[];

constructor(private skillsService: SkillsService){ }

  onAddSkill(skill:Skills){
    this.SkillsArr.push(skill);
  }

  ngOnInit() {
    this.SkillsArr = this.skillsService.getAllSkills();
  }

}

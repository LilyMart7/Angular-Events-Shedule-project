import { Component, OnInit } from '@angular/core';
import Skills from '..//models/skills-model';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  SkillsArr: Skills[] = [
  new Skills('HTML5', 'Master'),
  new Skills('CSS3', 'Basic'),
  new Skills('JavaScript', 'Begginer'),

]
  constructor() { }

  ngOnInit() {
  }

}

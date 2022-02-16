import {
  Component, EventEmitter,
  OnInit
} from "@angular/core";
import {NavigationStart, Router} from "@angular/router";
import {ModuleModel} from "./module.model";
import {SectorModel} from "./sector.model";
import {SectorService} from "./sector.service";
import {SubjectModel} from "./subject.model";
import {ModuleService} from "./module.service";
import {TeacherModel} from "../teacher/teacher.model";

@Component({
  selector: 'app-sector',
  templateUrl: 'sector.component.html',
  styleUrls: ['sector.component.css']
})
export class SectorComponent implements OnInit {
  private code!: string;
  private level!: number;
  public sector: SectorModel = new SectorModel();
  public actualModule!: ModuleModel;
  public actualSubject!: SubjectModel;

  constructor(private router: Router, private sectorService: SectorService, private moduleService: ModuleService) { }

  ngOnInit(): void {
    const array = this.router.url.split('/');
    this.code = array[2];
    this.level = Number(array[3]);
    this.getSectorByCode(this.code);
    this.router.events.subscribe(
      (event) =>
    {
      if (event instanceof NavigationStart) {
        const array = this.router.url.split('/');
        this.code = array[2];
        this.level = Number(array[3]);
        this.getSectorByCode(this.code);
    } });
    this.actualSubject = new SubjectModel();
    this.actualSubject.teacher = new TeacherModel();
    this.actualModule = new ModuleModel();
    this.actualModule.moduleManager = new TeacherModel();
  }

  public getSectorByCode(code: string) : void {
    this.sectorService.getSectorByCode(code).subscribe((response) => this.sector = response);
}

  public addSubjectToModule(subject: SubjectModel, teacher: TeacherModel, module: ModuleModel) : void {
    subject.teacher = teacher;
    if (module.listSubject) {
      module.listSubject.push(subject);
    } else {
      module.listSubject = [];
    }
    this.moduleService.updateModule(module).subscribe();
  }

  public updateSubjectToModule(subject: SubjectModel, teacher: TeacherModel, module: ModuleModel) : void {
    subject.teacher = teacher;
    let subjects = module.listSubject.filter(x => x.id != subject.id);
    subjects.push(subject);
    module.listSubject = subjects;
    this.moduleService.updateModule(module).subscribe();
    this.getSectorByCode(this.code);
  }

  public openModal(mode: string, module: ModuleModel | null, subject: SubjectModel | null) : void {
    if (subject) {
      this.actualSubject = subject;
    }
    if (module) {
      this.actualModule = module;
    }
    const container = document.getElementById('mycontainer');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');

    if (mode === 'addSubject') {
      button.setAttribute('data-bs-target', '#addSubjectModal');
    }
    if (mode === 'addModule') {
      button.setAttribute('data-bs-target', '#addModuleModal');
    }
    if (mode == 'updateModule') {
      button.setAttribute('data-bs-target', '#updateModuleModal');
    }
    if ( mode === 'updateSubject') {
      button.setAttribute('data-bs-target', '#updateSubjectModal');
    }
    if (container) {
      container.appendChild(button);
    }
    button.click();
  }

  public deleteSubjectToModule(module: ModuleModel, subject: SubjectModel) : void {
    this.actualModule = module;
    const subjects = module.listSubject.filter(x => x.designation != subject.designation);
    module.listSubject = subjects;
    this.moduleService.updateModule(module).subscribe();

  }

  deleteModuleToSector(module: ModuleModel) {
    let listModule = this.sector.listModule.filter(x => x.designation != module.designation);
    this.sector.listModule = listModule;
    this.sectorService.updateSector(this.sector).subscribe();

  }

  public addModuleToSector(module: ModuleModel, teacher: TeacherModel) : void {
    module.moduleManager = teacher;
    this.sector.listModule.push(module);
    this.sectorService.updateSector(this.sector).subscribe();
  }
}


import {AfterViewChecked, AfterViewInit, Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sector',
  templateUrl: 'sector.component.html',
  styleUrls: ['sector.component.css']
})
export class SectorComponent implements AfterViewChecked {
  private sectorName!: string;
  private level!: number;
  constructor(private router: Router) { }

  ngAfterViewChecked(): void {
    const array = this.router.url.split('/');
    this.sectorName = array[2];
    this.level = Number(array[3]);
  }


  public test() : void {
    console.log(this.sectorName);
    console.log(this.level);
  }







}

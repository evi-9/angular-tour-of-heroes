import {Component, Input, ChangeDetectionStrategy, inject } from '@angular/core';
import {NgIf, UpperCasePipe} from '@angular/common';
import {Hero} from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { DialogElementsExampleDialog } from '../hero-dialog/hero-dialog.component';
import { HeroService } from '../hero.service';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css',
  imports: [
    FormsModule, 
    NgIf, 
    UpperCasePipe,
    MatButtonModule,
    MatCardModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
  ]
})
export class HeroDetailComponent {

  isDisabled = false;

  @Input() hero?: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    if (this.hero) {
      this.dialog.open(DialogElementsExampleDialog, {
        data: this.hero
      });
    }
  }
}

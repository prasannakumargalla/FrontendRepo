import { Component, OnInit  } from '@angular/core';
import { TutorialService } from 'src/app/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor(private tutorialService: TutorialService) { }
  ngOnInit(): void {
    
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    alert(data.title);
    alert(data.description);

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

  }

}

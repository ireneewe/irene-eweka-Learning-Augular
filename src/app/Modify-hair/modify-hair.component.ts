import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators} from "@angular/forms";
import {hair} from "../shared/models/hair";
import {HairService} from "../services/hair.service";
import {hairList} from "../shared/mockData-hair";
@Component({
  selector: 'app-Modify-hair',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './modify-hair.component.html',
  styleUrl: './modify-hair.component.css'
})
export class ModifyHairComponent implements OnInit{
  hairForm: FormGroup;
  hairList: hair | undefined;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private hairService: HairService,
    private router: Router
  ) {
    this.hairForm = this.fb.group({
      id: ['', Validators.required], //ID is required
      hairName: ['', Validators.required],//First name is required
      hairType: ['', Validators.required],
      hairTexture: ['', Validators.required],
      color: [''],

    });

  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) { this.hairService.getHairById(+id).subscribe(hair => {
      if(hair) {
        this.hairList = hair;
        this.hairForm.patchValue(hairList);
      }
    });

    }
  }
  onSubmit(): void {
    const hairList: hair = this.hairForm.value;

    // Check if we're updating an existing student
    if (hairList.id) {
      this.hairService.updateHair(hairList);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.hairService.generateNewId(); // This method will create a new ID
      hairList.id = newId;
      this.hairService.addHair(hairList);
    }
    this.router.navigate(['/hair']);
  }

  onAdd(): void {
    this.onSubmit()
  }
  onUpdate(): void {
    this.onSubmit()

  }
}


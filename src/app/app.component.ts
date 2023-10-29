import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shadi-Form';
  marriageForm: FormGroup;
  marriageFormPDF: any = null;

  constructor(private formBuilder: FormBuilder) {
    this.marriageForm = this.formBuilder.group({
      name: ['', Validators.required],
      fatherName: ['', Validators.required],
      fatherOccupation: [''],
      gender: ['Male', Validators.required],
      maritalStatus: ['Single', Validators.required],
      sons: [0, Validators.required],
      daughters: [0, Validators.required],
      lifeStyle: [''],
      height: ['', Validators.required],
      age: [18, Validators.required],
      color: ['', Validators.required],
      bloodType: [''],
      haveBeard: ['Yes'],
      disabilities: [''],
      qualification: ['', Validators.required],
      islamicEducation: ['Yes'],
      parentsAlive: ['Both', Validators.required],
      brothers: [0, Validators.required],
      marriedBrothers: [0, Validators.required],
      sisters: [0, Validators.required],
      marriedSisters: [0, Validators.required],
      caste: ['', Validators.required],
      religion: ['', Validators.required],
      sect: ['', Validators.required],
      live_in_country: [''],
      live_in_state: [''],
      live_in_city: [''],
      from_country: [''],
      from_state: [''],
      from_city: [''],
      postalAddress: [''],
      houseStatus: [''],
      requirements: ['', Validators.required],
      profession: ['', Validators.required],
      designation: ['', Validators.required],
      monthlyIncome: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.marriageForm.valid) {
      this.marriageFormPDF = this.marriageForm.value
      this.generatePDF(this.marriageFormPDF.name)
    }
  }

  generatePDF(name: string) {
    const docDefinition = {
      content: [
        {
          text: 'Marriage Makers',
          style: 'heading'
        },
        {
          text: 'Registration Form',
          style: 'heading2'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Personal Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Name', this.marriageFormPDF.name],
              ['Father Name', this.marriageFormPDF.fatherName],
              ['Father\'s Occupation', this.marriageFormPDF.fatherOccupation],
              ['Gender', this.marriageFormPDF.gender],
              ['Marital Status', this.marriageFormPDF.maritalStatus],
              ['Sons', this.marriageFormPDF.sons],
              ['Daughters', this.marriageFormPDF.daughters],
              ['Life Style', this.marriageFormPDF.lifeStyle]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Physical Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Height', this.marriageFormPDF.height],
              ['Age', this.marriageFormPDF.age],
              ['Color', this.marriageFormPDF.color],
              ['Body Type', this.marriageFormPDF.bloodType],
              ['Disabilities', this.marriageFormPDF.disabilities],
              ['Have Beard', this.marriageFormPDF.haveBeard]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Qualification Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Qualification', this.marriageFormPDF.qualification],
              ['Islamic Education', this.marriageFormPDF.islamicEducation]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Family Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Parents Alive', this.marriageFormPDF.parentsAlive],
              ['Brothers', this.marriageFormPDF.brothers],
              ['Married Brothers', this.marriageFormPDF.marriedBrothers],
              ['Sisters', this.marriageFormPDF.sisters],
              ['Married Sisters', this.marriageFormPDF.marriedSisters],
              ['Caste', this.marriageFormPDF.caste]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Religious Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Religion', this.marriageFormPDF.religion],
              ['Sect', this.marriageFormPDF.sect]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Address Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Country (Lives In)', this.marriageFormPDF.live_in_country],
              ['State (Lives In)', this.marriageFormPDF.live_in_state],
              ['City (Lives In)', this.marriageFormPDF.live_in_city],
              ['Country (From)', this.marriageFormPDF.from_country],
              ['State (From)', this.marriageFormPDF.from_state],
              ['City (From)', this.marriageFormPDF.from_city],
              ['Postal Address', this.marriageFormPDF.postalAddress]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Other Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['House Status', this.marriageFormPDF.houseStatus],
              ['Requirements', this.marriageFormPDF.requirements]
            ]
          },
          layout: 'lightHorizontalLines'
        },
        {
          table: {
            widths: ['*', '*'],
            body: [
              [
                {
                  text: 'Job Info',
                  style: 'table-heading',
                  alignment: 'center',
                  colSpan: 2
                },
                ''
              ],
              ['Profession', this.marriageFormPDF.profession],
              ['Designation', this.marriageFormPDF.designation],
              ['Monthly Income', this.marriageFormPDF.monthlyIncome]
            ]
          },
          layout: 'lightHorizontalLines'
        }
      ],
      styles: {
        'table-heading': {
          bold: true,
          alignment: 'center',
          width: 100,
          margin: [0, 20, 0, 0]
        },
        'heading': {
          fontSize: 18,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 0]
        },
        'heading2': {
          fontSize: 10,
          bold: true,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        }
      }
    } as any;
    pdfMake.createPdf(docDefinition).download(name + '.pdf');
  }
}

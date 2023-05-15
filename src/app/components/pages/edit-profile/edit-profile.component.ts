import { Component, OnInit } from '@angular/core';
const DATA = [ {
  id:"1",
  name:"At vero eos et accusamus et iusto odio",
 backend:"PHP",
 date:"	15/11/2022",
 team:"	15 Members"

},
{
  id:"2",
  name:"	voluptatum deleniti atque corrupti quos",
 backend:"	Angular js",
 date:"		25/11/2022",
 team:"		12 Members"

},
{
  id:"3",
  name:"		dignissimos ducimus qui blanditiis praesentium",
 backend:"java",
 date:"5/12/2022",
 team:"	20 Members"

},
{
  id:"4",
  name:"	deleniti atque corrupti quos dolores",
 backend:"	Phython",
 date:"	14/12/2022",
 team:"	10 Members"

},
{
  id:"5",
  name:"	et quas molestias excepturi sint occaecati",
 backend:"Phython",
 date:"	4/12/2022",
 team:"	17 Members"

},
]
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  productData = DATA
  constructor() { }

  ngOnInit(): void {
  }
  click = (id:any)=>{
    var data = this.productData.filter(x =>{
      return x.id != id
    })
    this.productData = data
  }

}

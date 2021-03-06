import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ApiPostService } from 'src/app/services/post/api-post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formPost=new FormGroup({});
  filesPost:any;
  dataPost:any;
  post_id:any;
  constructor(private _router:Router, private _apiPostService:ApiPostService,
    private _formBuilder:FormBuilder,private _apiService:ApiService) { }

  ngOnInit(): void {
    this.formPost=this._formBuilder.group({
      content:['' , [Validators.required,Validators.maxLength(120),Validators.minLength(10)]],
      image: [null]
    
    });
  }

  post(){
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('Token')}`
    });
    let options = {
      'headers': headers
    }
    this._apiPostService.post('posts',{
      content: this.formPost.value.content,
      user_id: localStorage.getItem('id')
    },options).subscribe(
      (response:any)=>{
        // this._router.navigateByUrl('post')
        this.post_id=response.id;
        if(this.filesPost){
          this.addPicToPost();
        }
        location.reload(); 
      },(error:any)=>{console.log(error);
      }
    )

    
  }

  uploadImagePost(event){
    this.filesPost = event.target.files[0]
    // console.log(this.files);
    
  }

  addPicToPost(){
    const formDataPost = new FormData();
    
    formDataPost.append('image', this.filesPost, this.filesPost.name)
    this._apiService.post(`postpicture/${this.post_id}`, formDataPost)
    .subscribe((response:any)=>{
      this.dataPost = response;
      this.formPost.get('image').reset();
    })
  }

}

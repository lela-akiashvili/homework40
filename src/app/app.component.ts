import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
export interface Item {
  name: string;
  img: string;
  description: string;
  id: number;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styles:`img{
    max-height:31vw;
    border-radius:1.3rem;
  }
  .items{
    display:flex;
    gap:1rem;
    flex-wrap:wrap;
    font-family:arial;
    padding:1rem;
  }
  .form{
    display:flex;
    align-items:center;
     gap:1rem;
     padding:1.3rem;
     justify-content:center;
  }
  input[type=file]{
    display:none;
  }
  .label{
    border:none;
    background-color:red;
    padding:5px 15px;
    border-radius:15px;
    color:white;
  }
  .form div{
    display:grid;
  }
  .search{
    text-align:center;
  }`
})
export class AppComponent {
  title = '';
  desc ='';
  id: number = 8;
  image: string = '';
  itemsArray: Item[] = [
    { name: "Scum-Villain's Self-Saving System", img: 'https://m.media-amazon.com/images/I/91Spe++JppL._AC_UF1000,1000_QL80_.jpg', description: 'Book', id: 1 },
    { name: "Omniscient Reader's Viewpoint", img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXQHjGArHu2kPz10SfVc4-CclEG8WINYS-9kzWI1geUrE0_rejNkY3v6MgsXsK6gFn-mAfGkvPRVO693PBOv3vxJGzGu0zw8xsBau45b0VHTUMX8X1pxwsOhws0CK7tOS0Uac3vSnIdlg/w1200-h630-p-k-no-nu/Omniscient-Readers-Viewpoint.png', description: 'Book', id: 2 },
    { name: "Heaven Official's Blessing", img: 'https://m.media-amazon.com/images/I/81wK+xpo7AL._AC_UF1000,1000_QL80_.jpg', description: 'Book', id: 5 },
    { name: 'Haikyuu!!', img: 'https://m.media-amazon.com/images/I/8125DI58M+L._AC_UF1000,1000_QL80_.jpg', description: 'Manga', id: 6 },
    { name: 'Shingeki no kyojin', img: 'https://cdn.kobo.com/book-images/fc99d295-1348-4849-bd96-8c25b25f3598/353/569/90/False/attack-on-titan-16.jpg', description: 'Manga', id: 7 },
    { name: 'Kuroshitsuji', img: 'https://img.spoilerhat.com/img/?url=https://zjcdn.mangafox.me/store/manga/2746/TBD-202.0/compressed/c002.jpg', description: 'book', id: 7 },
  ];

  onFile(event: any) {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.image = reader.result as string;
      };
      reader.readAsDataURL(selectedFile);
    }
  }
  onClick() {
    const newItem:Item = {
      name: this.title,
      description: this.desc,
      img: this.image,
      id: this.id++,
    };
  this.itemsArray.push(newItem);
  console.log(this.itemsArray);
  }
  onSearch(value:string|number){
// if  itemsArrya includes (value) possibly @vievchild items div and render it with that matches 
  }
}

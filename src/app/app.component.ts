import { Component, Input } from '@angular/core';
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
  styleUrl: './app.component.css',
})
export class AppComponent {
  search = '';
  title = '';
  desc = '';
  id = 7;
  imgUrl: string = '';
  itemsArray: Item[] = [
    {
      name: "Scum-Villain's Self-Saving System",
      img: 'https://m.media-amazon.com/images/I/91Spe++JppL._AC_UF1000,1000_QL80_.jpg',
      description: 'Book',
      id: 1,
    },
    {
      name: "Omniscient Reader's Viewpoint",
      img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXQHjGArHu2kPz10SfVc4-CclEG8WINYS-9kzWI1geUrE0_rejNkY3v6MgsXsK6gFn-mAfGkvPRVO693PBOv3vxJGzGu0zw8xsBau45b0VHTUMX8X1pxwsOhws0CK7tOS0Uac3vSnIdlg/w1200-h630-p-k-no-nu/Omniscient-Readers-Viewpoint.png',
      description: 'Book',
      id: 2,
    },
    {
      name: "Heaven Official's Blessing",
      img: 'https://m.media-amazon.com/images/I/81wK+xpo7AL._AC_UF1000,1000_QL80_.jpg',
      description: 'Book',
      id: 5,
    },
    {
      name: 'Haikyuu!!',
      img: 'https://m.media-amazon.com/images/I/8125DI58M+L._AC_UF1000,1000_QL80_.jpg',
      description: 'Manga',
      id: 6,
    },
    {
      name: 'Shingeki no kyojin',
      img: 'https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7788898-33.jpg',
      description: 'Manga',
      id: 7,
    },
    {
      name: 'Kuroshitsuji',
      img: 'https://img.spoilerhat.com/img/?url=https://zjcdn.mangafox.me/store/manga/2746/TBD-202.0/compressed/c002.jpg',
      description: 'Manga',
      id: 7,
    },
  ];
  newItems: Item[] = [];

  onFile(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imgUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  onClick() {
    if (this.title === '' || this.desc === '' || this.imgUrl === '') {
      alert('Fill in All Fields and Upload Image to Continue');
    } else {
      const newitem: Item = {
        name: this.title,
        description: this.desc,
        id: this.id++,
        img: this.imgUrl,
      };
      this.itemsArray.push(newitem);
      console.log(this.itemsArray);
      console.log(this.imgUrl);
      this.title = '';
      this.desc = '';
      this.imgUrl = '';
    }
  }
  onSearch() {
    this.newItems = this.itemsArray.filter(
      (item) =>
        item.name.toLocaleLowerCase().includes(this.search) ||
        item.description.toLocaleLowerCase().includes(this.search)
    );
    console.log(this.newItems);
    return this.newItems;
  }
}

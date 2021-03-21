import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "angular-pwa";
  public posts: Posts[] = [];
  constructor(private httpClient: HttpClient) {}

  public ngOnInit() {
    this.httpClient
      .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
      .subscribe((res) => {
        this.posts = res;
      });
  }
}

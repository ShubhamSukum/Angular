import { Component } from '@angular/core';
import { Config, ConfigService } from '../config.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent {
  public users: Config[] = []
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.configService.getConfig()
    .subscribe({
      next: (data: Config[]) => {
        console.log(data)
        this.users = data;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}

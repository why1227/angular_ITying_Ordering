import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-pcontent',
  templateUrl: './pcontent.component.html',
  styleUrls: ['./pcontent.component.scss']
})
export class PcontentComponent implements OnInit {

  domain: string = "";
  list = { "_id": "5ac1a22011f48140d0002955", "shop_id": 0, "cate_id": "5ac0896ca880f20358495508", "catename": "精选热菜", "title": "娃娃菜炖豆腐", "price": "2", "product_bar_code": "6921168550098", "num": "10", "description": "规格:500ml/瓶", "status": "1", "is_best": "1", "is_hot": "1", "content": "<p>娃娃菜富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。娃娃菜吃起来口感脆嫩清甜。我们吃娃娃菜喜欢到饭店里吃蒜蓉粉丝娃娃菜，妈妈喜欢做娃娃菜炖豆腐，有一股自然的清香，女儿很喜欢吃姥姥做的，说是好吃又减肥。111</p>", "img_url": "upload\\20180417\\1523969206225.jpg", "type": "1", "sort": "", "is_host": 1 };
  constructor(private route: ActivatedRoute, private common: CommonService) {
    this.domain = this.common.domain;
  }

  ngOnInit(): void {
    this.route.params.subscribe((value: any) => {
      this.request_content(value.id);
    })
  }

  request_content(id: string) {
    let api = "api/productcontent?id=" + id;
    this.common.get(api).then((data: any) => {
      console.log(data.result[0]);
      this.list = data.result[0];
    })
  }
}

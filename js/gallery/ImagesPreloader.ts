/**
 * Created by VladHome on 1/29/2016.
 */
    ///<reference path="../typing/jquery.d.ts"/>

module uplight {
    export class ImageM{
        name:string;
        id:number;
        thumb:string;
        large:string;
        image:HTMLImageElement;

        price:string;
        sale:boolean;
        cats:number[];
        i:number;
        constructor(obj,i:number){
            this.i=i;
            for(var str in obj)this[str] = obj[str];
            this.cats=obj.cats.split(',').map(Number);
            this.image = new Image();
            this.image.src = this.thumb;
            this.image.onload = (evt)=>{
                ImagesPreloader.onImageLoaded(i);
            }
        }

    }


    export class ImagesPreloader {
        static onImageLoaded:Function = function(i){};
        static images:ImageM[];

        private current:number;
        constructor(ar:ImageM[], private options:any) {
            var out:ImageM[] = [];
            for (var i = 0, n = ar.length; i < n; i++)   out.push(new ImageM(ar[i], i));//  this.addImages(i,this.renderSet(ar[i],i.toString()));
            ImagesPreloader.images = out;
            this.current = 0
        }

        getNext():ImageM{
            this.current++;
            if(this.current>=ImagesPreloader.images.length) this.current=0;
           var img:ImageM =  ImagesPreloader.images[this.current];
            return img;
        }
    }

}
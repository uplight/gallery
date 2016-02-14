/**
 * Created by VladHome on 2/13/2016.
 */
    ///<reference path="../typing/jquery.d.ts"/>
    ///<reference path="ImagesPreloader.ts"/>
    ///<reference path="ImagesRow2.ts"/>

module gallery2{
    export class Main{
        preloader:uplight.ImagesPreloader;
        private rows:gallery.ImagesRow2
        constructor($view:JQuery,private opt:any){
            this.loadData();

        }
        initRows():void{
            var ar = this.opt.gals;
            console.log(ar);
            var out:gallery.ImagesRow2[] = [];
            for(var i=0,n=ar.length;i<n;i++){
                var item = ar[i];
                out.push(new gallery.ImagesRow2(ar[i],this.preloader,this.opt,i));
            }
        }
        loadData():void{
            $.get(this.opt.getimages).done((res)=>{
                this.preloader = new uplight.ImagesPreloader(res,this.opt);
                uplight.ImagesPreloader.onImageLoaded = (i)=>{
                    if(i===50)this.initRows();
                }

            })
        }
    }
}
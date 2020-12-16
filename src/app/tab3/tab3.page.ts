import {Component, Renderer2, OnInit, ViewChild, ElementRef} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Platform} from '@ionic/angular';
import {Camera, CameraResultType, CameraSource, Capacitor} from '@capacitor/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild('filePicker', { static: false }) filePickerRef: ElementRef<HTMLInputElement>;
  photo: SafeResourceUrl;
  isDesktop: boolean;
  private storage: any;
  constructor(
      private renderer: Renderer2,
      private platform: Platform,
      // private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if ((this.platform.is('mobile') && this.platform.is('hybrid')) ||
        this.platform.is('desktop')) {
      this.isDesktop = true;
    }
  }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    if (event.detail.checked){
      this.renderer.setAttribute(document.body, 'color-theme', 'dark');
    } else {
      this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }

  async getPicture(type: string) {
    if (!Capacitor.isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
      this.filePickerRef.nativeElement.click();
      return;
    }

    const image = await Camera.getPhoto({
      quality: 100,
      width: 400,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
      saveToGallery: true
    });
    console.log(image);
    this.photo = image.dataUrl;
    // this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    console.log('this.photo: ', this.photo);
  }

  onFileChoose(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
      console.log('File format not supported');
      return;
    }

    reader.onload = () => {
      this.photo = reader.result.toString();
    };
    reader.readAsDataURL(file);
  }

  dataURLtoFile(dataurl, filename) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type: mime});
  }

  upload() {
    const file = this.dataURLtoFile(this.photo, 'file');
    console.log('file:', file);
    const filePath = 'photos/latestPhoto.jpg';
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);
  }
}

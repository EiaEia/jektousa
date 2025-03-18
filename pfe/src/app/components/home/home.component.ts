import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('navbar') navbarRef!: ElementRef;

  constructor(private renderer: Renderer2, private element: ElementRef, public location: Location) {}

  ngOnInit() {
      this.renderer.listen('window', 'scroll', () => {
          if (this.navbarRef) {
              if (window.scrollY > 150) {
                  this.renderer.removeClass(this.navbarRef.nativeElement, 'navbar-transparent');
              } else {
                  this.renderer.addClass(this.navbarRef.nativeElement, 'navbar-transparent');
              }
          }
      });

      // Vérification Internet Explorer
      var ua = window.navigator.userAgent;
      var trident = ua.indexOf('Trident/');
      var version: number | undefined;

      if (trident > 0) {
          var rv = ua.indexOf('rv:');
          version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      if (version !== undefined) {
          document.body.classList.add('ie-background');
      }
  }

  removeFooter(): boolean {
      return !(this.location.path().endsWith('signup') || this.location.path().endsWith('nucleoicons'));
  }
}

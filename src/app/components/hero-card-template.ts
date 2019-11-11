export function getHeroCardTemplate(
  componentName: string = 'HeroCardComponent'
): string {
  return `
        {{ blink() }}
        <mat-card>
          <mat-card-header>
            <small>${componentName}</small>
            <mat-card-title>{{ hero.name }}</mat-card-title>
            <mat-card-subtitle>{{ hero.id }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <app-hero-details [hero]="hero"></app-hero-details>
          </mat-card-content>
          <mat-card-actions>
             <div class="d-flex flex-wrap">   
              <button mat-raised-button color="primary" (click)="changeName()">
                Change Name
              </button>
              <button mat-raised-button color="primary" (click)="changeAge()">
                Change Age
              </button>
              <button mat-raised-button color="primary" (click)="loadNameViaHttp()">
                Load name via HTTP
              </button>
            </div>
            <div class="d-flex flex-wrap mt-2">
              <button mat-raised-button color="accent" (click)="cd.detach()">
                Detach
              </button>
              <button mat-raised-button color="accent" (click)="cd.reattach()">
                Reattach
              </button>
              <button matTooltip="detectChanges()" mat-raised-button color="accent" (click)="cd.detectChanges()">
                DC
              </button>
              <button matTooltip="markForCheck()" mat-raised-button color="accent" (click)="cd.markForCheck()">
                MFC
              </button>
            </div>
          </mat-card-actions>
        </mat-card>
`;
}

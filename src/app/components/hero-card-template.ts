export function getHeroCardTemplate(): string {
  return `
        {{ blink() }}
        <mat-card>
          <mat-card-header>
            <mat-card-title>{{ hero.name }}</mat-card-title>
            <mat-card-subtitle>{{ hero.id }}</mat-card-subtitle>
          </mat-card-header>
          <mat-card-content>
            <mat-expansion-panel>
              <mat-expansion-panel-header>
                <mat-panel-title>
                  Hero Details Child Component
                </mat-panel-title>
              </mat-expansion-panel-header>
              <app-hero-details [hero]="hero"></app-hero-details>
            </mat-expansion-panel>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" (click)="changeName()">
              Change Name
            </button>
            <button mat-raised-button color="primary" (click)="changeAge()">
              Change Age
            </button>
            <button mat-raised-button color="primary" (click)="loadNameViaHttp()">
              Load name via HTTP
            </button>
          </mat-card-actions>
        </mat-card>
`;
}

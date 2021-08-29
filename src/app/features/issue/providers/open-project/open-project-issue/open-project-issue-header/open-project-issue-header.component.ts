import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskWithSubTasks } from '../../../../../tasks/task.model';
import { T } from '../../../../../../t.const';

@Component({
  selector: 'openProject-issue-header',
  templateUrl: './open-project-issue-header.component.html',
  styleUrls: ['./open-project-issue-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenProjectIssueHeaderComponent {
  T: typeof T = T;
  @Input() task?: TaskWithSubTasks;

  constructor() {}
}

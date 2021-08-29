import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TaskWithSubTasks } from '../../../../../tasks/task.model';
import { OpenProjectIssue } from '../open-project-issue.model';
import { expandAnimation } from '../../../../../../ui/animations/expand.ani';
import { T } from '../../../../../../t.const';
import { TaskService } from '../../../../../tasks/task.service';

@Component({
  selector: 'openProject-issue-content',
  templateUrl: './open-project-issue-content.component.html',
  styleUrls: ['./open-project-issue-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [expandAnimation],
})
export class OpenProjectIssueContentComponent {
  @Input() issue?: OpenProjectIssue;
  @Input() task?: TaskWithSubTasks;

  T: typeof T = T;

  constructor(private readonly _taskService: TaskService) {}

  hideUpdates(): void {
    if (!this.task) {
      throw new Error('No task');
    }
    this._taskService.markIssueUpdatesAsRead(this.task.id);
  }

  trackByIndex(i: number, p: any): number {
    return i;
  }
}

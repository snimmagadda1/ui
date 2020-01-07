/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Badge as BadgeType, Size, IconField } from '../types';
import { ActionsStyle, ActionStyle } from './style';
import Badge from '../Badge';
import { ItemIcon } from '../Icon';

const Actions: React.FC<ActionsProps> = ({ actions, className, style, fullWidth, size, inverse, Link, nextJs }) => {
  return (
    <ActionsStyle className={className} style={style}>
      {actions.map((action: ActionType, index: number) => {
        const icon = <ItemIcon icon={action.icon} className="control-icon" />;
        return (
          <ActionStyle key={index} fullWidth={fullWidth} size={size} inverse={inverse} disabled={!!action.disabled}>
            {action.icon ? (
              action.link && Link ? (
                <Link {...action.link} className="icon-container">
                  {nextJs ? <a>{icon}</a> : icon}
                </Link>
              ) : (
                <a {...action.url} className="icon-container">
                  {icon}
                </a>
              )
            ) : (
              action.content
            )}
            {action.badge && (
              <Badge status={action.badge.status} position={action.badge.position}>
                {action.badge.title}
              </Badge>
            )}
          </ActionStyle>
        );
      })}
    </ActionsStyle>
  );
};

Actions.defaultProps = {
  size: 'Small',
};
export { Actions };
export interface ActionType {
  icon?: IconField;
  link?: object;
  url?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  content?: any;
  disabled?: boolean;
  badge?: BadgeType;
}

interface ActionsProps {
  actions: ActionType[];
  size: Size;
  inverse?: boolean;
  fullWidth?: boolean;
  Link?: any;
  className?: string;
  style?: React.CSSProperties;
  nextJs?: boolean;
}

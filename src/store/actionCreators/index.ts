import * as checkActions from './check';
import * as sortActions from './sort';
import * as ticketActions from './ticket';

export default { ...checkActions, ...sortActions, ...ticketActions };

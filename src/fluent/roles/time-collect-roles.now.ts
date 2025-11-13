import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const time_collect_user = Role({
    name: 'x_snc_time_collect.user',
    description: 'Basic time collection user - can create and edit their own time entries'
})

export const time_collect_manager = Role({
    name: 'x_snc_time_collect.manager',
    description: 'Time collection manager - can approve time entries and view team reports',
    contains_roles: [time_collect_user]
})

export const time_collect_admin = Role({
    name: 'x_snc_time_collect.admin',
    description: 'Time collection administrator - full access to all time collection features',
    contains_roles: [time_collect_manager],
    scoped_admin: true
})
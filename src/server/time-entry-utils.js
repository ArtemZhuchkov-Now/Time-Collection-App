import { gs, GlideDateTime } from '@servicenow/glide'

export function calculateHours(current, previous) {
    // Only calculate if we have both start and end times
    if (current.start_time && current.end_time) {
        const startTime = new GlideDateTime(current.start_time.getValue());
        const endTime = new GlideDateTime(current.end_time.getValue());
        
        // Calculate difference in milliseconds
        const startMs = startTime.getNumericValue();
        const endMs = endTime.getNumericValue();
        
        if (endMs > startMs) {
            // Calculate hours (difference in milliseconds / (1000ms * 60s * 60min))
            const hours = (endMs - startMs) / (1000 * 60 * 60);
            current.hours_worked = hours.toFixed(2);
        } else {
            gs.addErrorMessage('End time must be after start time');
        }
    }
}

export function validateWorkDate(current, previous) {
    // Ensure work date is not in the future
    const today = new GlideDateTime();
    const workDate = new GlideDateTime(current.work_date.getValue());
    
    if (workDate.after(today)) {
        gs.addErrorMessage('Work date cannot be in the future');
    }
    
    // Ensure work date is not more than 30 days old
    const thirtyDaysAgo = new GlideDateTime();
    thirtyDaysAgo.addDaysLocalTime(-30);
    
    if (workDate.before(thirtyDaysAgo)) {
        gs.addErrorMessage('Work date cannot be more than 30 days old');
    }
}

export function setDefaultEmployee(current, previous) {
    // Set employee to current user if not specified
    if (!current.employee) {
        current.employee = gs.getUserID();
    }
}
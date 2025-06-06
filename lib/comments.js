export async function saveComment(commentData) {
    try {
        // Validate required fields
        if (!commentData.name || !commentData.name.trim()) {
            throw new Error('Name is required');
        }
        if (!commentData.comment || !commentData.comment.trim()) {
            throw new Error('Comment is required');
        }
        
        // Validate email format
        if (!commentData.email || 
            commentData.email.length < 3 ||
            !commentData.email.includes('@') || 
            !commentData.email.includes('.')) {
            throw new Error('Invalid email format');
        }

        const comment = {
            name: commentData.name,
            email: commentData.email,
            comment: commentData.comment,
            timestamp: new Date().toISOString(),
        };
        // Log the comment for debugging
        console.log('Comment data:', comment);

        return { success: true, comment };
    } catch (error) {
        console.error('Error saving comment:', error);
        return { success: false, error: 'Failed to save comment' };
    }
}

export function getComments() {
    try {
        const stmt = db.prepare('SELECT * FROM comments ORDER BY timestamp DESC');
        const comments = stmt.all();
        return comments;
    } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
    }
}
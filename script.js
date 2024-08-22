
document.getElementById('leaveForm').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const employeeName = document.getElementById('employeeName').value;
    const leaveType = document.getElementById('leaveType').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    
    addLeaveRequest(employeeName, leaveType, startDate, endDate);

    
    document.getElementById('leaveForm').reset();
});

function addLeaveRequest(employeeName, leaveType, startDate, endDate) {
    const leaveList = document.getElementById('leaveList');
    
    const listItem = document.createElement('li');
    listItem.textContent = `${employeeName} - ${leaveType} from ${startDate} to ${endDate}`;

    const approveButton = document.createElement('button');
    approveButton.textContent = 'Approve';
    approveButton.classList.add('approve');
    approveButton.addEventListener('click', function() {
        listItem.style.backgroundColor = '#d4edda';
    });

    const rejectButton = document.createElement('button');
    rejectButton.textContent = 'Reject';
    rejectButton.classList.add('reject');
    rejectButton.addEventListener('click', function() {
        listItem.style.backgroundColor = '#f8d7da';
    });

    listItem.appendChild(approveButton);
    listItem.appendChild(rejectButton);
    leaveList.appendChild(listItem);
}

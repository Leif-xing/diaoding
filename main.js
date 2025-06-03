function calculateMaterials(length, width) {
    // ���۰� (300mm��600mm = 0.3m��0.6m)
    const aluminum_panel = Math.round((length * width) / (0.3 * 0.6)) + 5;
    // ������
    const main_keel = Math.round((width * (Math.ceil(length / 1.0) + 1)) / 3.0);
    // ��������
    const triangle_keel = Math.round((length * (width / 0.3)) / 3) + 2;
    // ����
    const skirting = Math.round(((length + width) * 2) / 3) + 2;
    // ˿�ˣ�����ȡ����
    const threaded_rod = Math.ceil((Math.ceil(length) + 1) * width);
    // �������˿����ͬ��
    const quick_hanger = threaded_rod;
    // ��ñ�������3������ȡ����
    const nut = Math.ceil(quick_hanger * 3);
    // ��Ƭ������ȡ����
    const hanging_piece = Math.ceil((width / 0.3) * (length / 1.0 + 1));
    // �ڶ��������1.2������ȡ����
    const pin = Math.ceil(quick_hanger * 1.2);
    return [
        { name: '���۰�', value: aluminum_panel, unit: 'Ƭ' },
        { name: '������', value: main_keel, unit: '֧' },
        { name: '��������', value: triangle_keel, unit: '֧' },
        { name: '����', value: skirting, unit: '֧' },
        { name: '˿��', value: threaded_rod, unit: '��' },
        { name: '���', value: quick_hanger, unit: '��' },
        { name: '��ñ', value: nut, unit: '��' },
        { name: '��Ƭ', value: hanging_piece, unit: '��' },
        { name: '�ڶ�', value: pin, unit: '��' }
    ];
}

function clearInputs() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('hangHeight').value = '';
    document.getElementById('totalHeight').value = '';
    document.querySelector('#resultTable tbody').innerHTML = '';
    document.getElementById('resultTable').style.display = 'none';
}

function validateInputs(length, width) {
    if (isNaN(length) || isNaN(width)) return false;
    if (length <= 0 || width <= 0) return false;
    return true;
}

document.getElementById('clearBtn').addEventListener('click', clearInputs);
document.getElementById('calcBtn').addEventListener('click', function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    if (!validateInputs(length, width)) {
        alert('��������Ч�ķ�����������ȺͿ�������0��');
        return;
    }
    const result = calculateMaterials(length, width);
    const tbody = document.querySelector('#resultTable tbody');
    tbody.innerHTML = '';
    result.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${item.name}</td><td>${item.value}</td><td>${item.unit}</td>`;
        tbody.appendChild(tr);
    });
    var resultTable = document.getElementById('resultTable');
    if (resultTable) {
        resultTable.style.display = '';
    }
});

// �Ƴ� startBtn ����¼�����
document.getElementById('startBtn').addEventListener('click', function () {
    var resultTable = document.getElementById('resultTable');
    if (resultTable) {
        resultTable.style.display = '';
    }
});
function calculateMaterials(length, width) {
    // 铝扣板 (300mm×600mm = 0.3m×0.6m)
    const aluminum_panel = Math.round((length * width) / (0.3 * 0.6)) + 5;
    // 主龙骨
    const main_keel = Math.round((width * (Math.ceil(length / 1.0) + 1)) / 3.0);
    // 三角龙骨
    const triangle_keel = Math.round((length * (width / 0.3)) / 3) + 2;
    // 脚线
    const skirting = Math.round(((length + width) * 2) / 3) + 2;
    // 丝杆（向上取整）
    const threaded_rod = Math.ceil((Math.ceil(length) + 1) * width);
    // 快吊（与丝杆相同）
    const quick_hanger = threaded_rod;
    // 螺帽（快吊×3，向上取整）
    const nut = Math.ceil(quick_hanger * 3);
    // 挂片（向上取整）
    const hanging_piece = Math.ceil((width / 0.3) * (length / 1.0 + 1));
    // 炮钉（快吊×1.2，向上取整）
    const pin = Math.ceil(quick_hanger * 1.2);
    return [
        { name: '铝扣板', value: aluminum_panel, unit: '片' },
        { name: '主龙骨', value: main_keel, unit: '支' },
        { name: '三角龙骨', value: triangle_keel, unit: '支' },
        { name: '脚线', value: skirting, unit: '支' },
        { name: '丝杆', value: threaded_rod, unit: '条' },
        { name: '快吊', value: quick_hanger, unit: '个' },
        { name: '螺帽', value: nut, unit: '个' },
        { name: '挂片', value: hanging_piece, unit: '个' },
        { name: '炮钉', value: pin, unit: '个' }
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
        alert('请输入有效的房间参数，长度和宽度需大于0。');
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

// 移除 startBtn 相关事件监听
document.getElementById('startBtn').addEventListener('click', function () {
    var resultTable = document.getElementById('resultTable');
    if (resultTable) {
        resultTable.style.display = '';
    }
});
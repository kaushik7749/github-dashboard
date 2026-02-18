import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import './ActivityOverview.css';

export default function ActivityOverview() {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current, null, { renderer: 'svg' });

    chart.setOption({
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {d}%',
        backgroundColor: '#21262d',
        borderColor: '#30363d',
        textStyle: { color: '#e6edf3', fontSize: 12 },
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '80%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: 12, fontWeight: 600, color: '#e6edf3' },
          },
          data: [
            { value: 83, name: 'Commits',       itemStyle: { color: '#3fb950' } },
            { value: 4,  name: 'Issues',        itemStyle: { color: '#d29922' } },
            { value: 13, name: 'Pull requests', itemStyle: { color: '#58a6ff' } },
          ],
        },
      ],
    });

    const resize = () => chart.resize();
    window.addEventListener('resize', resize);
    return () => { window.removeEventListener('resize', resize); chart.dispose(); };
  }, []);

  return (
    <div className="activity-box">
      <h3 className="activity-title">Activity overview</h3>
      <p className="activity-desc">
        Contributed to{' '}
        <a href="#">UptimeAI/uptime_webapp</a>,{' '}
        <a href="#">UptimeAI/uptime_server</a>,{' '}
        <a href="#">UptimeAI/uptime_ml</a> and{' '}
        <a href="#">13 other repositories</a>
      </p>
      <div className="chart-row">
        <div ref={chartRef} className="donut-chart" />
        <ul className="legend-list">
          <li><span className="dot" style={{ background: '#3fb950' }} />Commits — 83%</li>
          <li><span className="dot" style={{ background: '#d29922' }} />Issues — 4%</li>
          <li><span className="dot" style={{ background: '#58a6ff' }} />Pull requests — 13%</li>
        </ul>
      </div>
    </div>
  );
}
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { useContributions } from '../../hooks/useContributions';
import './ContributionGraph.css';

const YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

// GitHub's exact 5-level contribution colours (level 0–4)
const LEVEL_COLORS = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

export default function ContributionGraph({ username }) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { contributions, total, loading, error } = useContributions(username, selectedYear);
  const chartRef    = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current || loading) return;

    // Dispose previous instance so ECharts re-reads container dimensions cleanly
    if (instanceRef.current) {
      instanceRef.current.dispose();
      instanceRef.current = null;
    }

    // rAF ensures the DOM has painted and the div has real pixel dimensions
    const raf = requestAnimationFrame(() => {
      if (!chartRef.current) return;

      instanceRef.current = echarts.init(chartRef.current, null, { renderer: 'svg' });
      const chart = instanceRef.current;

      // Compute per-day max so visualMap scales correctly
      const maxCount = contributions.reduce((m, [, c]) => Math.max(m, c), 1);

      chart.setOption({
        backgroundColor: 'transparent',

        tooltip: {
          trigger: 'item',
          formatter: (params) => {
            if (!params.value) return '';
            const [date, count] = params.value;
            const label = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
              weekday: 'long', month: 'short', day: 'numeric', year: 'numeric',
            });
            return `<strong>${count} contribution${count !== 1 ? 's' : ''}</strong><br/>${label}`;
          },
          backgroundColor: '#21262d',
          borderColor: '#30363d',
          textStyle: { color: '#e6edf3', fontSize: 12 },
          extraCssText: 'border-radius:6px; padding:8px 12px; box-shadow:0 4px 12px rgba(0,0,0,.4);',
        },

        visualMap: {
          min: 0,
          max: maxCount,
          show: false,
          inRange: { color: LEVEL_COLORS },
        },

        calendar: {
          top: 24,
          left: 40,
          right: 8,
          bottom: 8,
          range: String(selectedYear),
          cellSize: [12, 12],
          splitLine: { show: false },
          dayLabel: {
            show: true,
            nameMap: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
            color: '#656d76',
            fontSize: 10,
          },
          monthLabel: { color: '#8b949e', fontSize: 11 },
          yearLabel: { show: false },
          itemStyle: {
            borderColor: '#0d1117',
            borderWidth: 2,
            borderRadius: 2,
            color: '#161b22',  // default (level 0) cell colour
          },
        },

        series: [{
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: contributions,   // [["YYYY-MM-DD", count], ...]
          itemStyle: { borderRadius: 2 },
        }],
      }, true);

      chart.resize();

      const onResize = () => chart.resize();
      window.addEventListener('resize', onResize);
      instanceRef._cleanup = () => window.removeEventListener('resize', onResize);
    });

    return () => {
      cancelAnimationFrame(raf);
      instanceRef._cleanup?.();
    };
  }, [contributions, loading, selectedYear]);

  // Dispose on unmount
  useEffect(() => {
    return () => {
      instanceRef._cleanup?.();
      instanceRef.current?.dispose();
      instanceRef.current = null;
    };
  }, []);

  return (
    <section className="contrib-section">

      {/* Header */}
      <div className="contrib-header">
        <p className="contrib-count">
          <strong>{total.toLocaleString()} contributions</strong> in {selectedYear}
        </p>
        <button className="contrib-settings-btn">
          Contribution settings
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
          </svg>
        </button>
      </div>

      {error && (
        <p className="contrib-error">
          ⚠️ Could not load contribution data — {error}
        </p>
      )}

      {/* Chart + vertical year selector */}
      <div className="contrib-body">
        <div className="contrib-chart-wrap">
          {loading
            ? <div className="skeleton" style={{ width: '100%', height: 160, borderRadius: 6 }} />
            : <div ref={chartRef} className="contrib-chart" />
          }
        </div>

        <div className="year-bar">
          {YEARS.map((y) => (
            <button
              key={y}
              className={`year-btn ${y === selectedYear ? 'active' : ''}`}
              onClick={() => setSelectedYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="contrib-footer">
        <a
          href="https://docs.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile"
          className="contrib-learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how we count contributions
        </a>
        <div className="contrib-legend">
          <span className="legend-text">Less</span>
          {LEVEL_COLORS.map((c, i) => (
            <span key={i} className="legend-cell" style={{ background: c }} />
          ))}
          <span className="legend-text">More</span>
        </div>
      </div>

    </section>
  );
}
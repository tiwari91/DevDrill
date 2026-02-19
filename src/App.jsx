import React, { useState, useEffect, useCallback, useRef } from 'react';
import { INTERVIEW_QUESTIONS, TOPIC_META } from './data';
import {
  Leaf, Container, Ship, Network, Atom, Coffee, Database, GitBranch, Globe, Cloud,
  Trophy, Target, ChevronRight, ChevronLeft, Bookmark, BookmarkCheck,
  ArrowLeft, Keyboard, Flame, Zap, Brain,
  Clock, Settings, Play, RotateCcw, Home, CheckCircle2, XCircle, Hash
} from 'lucide-react';

// --- Icon Map ---
const ICON_MAP = { Leaf, Container, Ship, Network, Atom, Coffee, Database, GitBranch, Globe, Cloud };

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

// --- Custom Hooks ---
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initial;
    } catch { return initial; }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function useKeyboardShortcuts(handlers) {
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const fn = handlers[e.key] || handlers[e.code];
      if (fn) { e.preventDefault(); fn(); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handlers]);
}

// --- Helpers ---
const today = () => new Date().toISOString().split('T')[0];

function getGrade(pct) {
  if (pct >= 95) return { letter: 'S', color: 'text-yellow-400', msg: 'Absolute legend. You crushed it.' };
  if (pct >= 80) return { letter: 'A', color: 'text-emerald-400', msg: 'Senior-level performance. Impressive!' };
  if (pct >= 60) return { letter: 'B', color: 'text-blue-400', msg: 'Solid knowledge. A few more reps and you\'re there.' };
  if (pct >= 40) return { letter: 'C', color: 'text-amber-400', msg: 'Good foundation. Keep drilling those weak spots.' };
  return { letter: 'D', color: 'text-red-400', msg: 'Time to revisit the fundamentals. You got this!' };
}

const difficultyConfig = {
  easy: { label: 'Easy', bg: 'bg-emerald-500/15', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  medium: { label: 'Medium', bg: 'bg-amber-500/15', text: 'text-amber-400', border: 'border-amber-500/30' },
  hard: { label: 'Hard', bg: 'bg-red-500/15', text: 'text-red-400', border: 'border-red-500/30' },
};

// --- Sub-Components ---

function Header({ screen, selectedTopic, onBack, onDashboard }) {
  return (
    <header className="flex items-center justify-between mb-6 md:mb-8">
      <div className="flex items-center gap-3">
        {screen !== 'dashboard' && (
          <button onClick={onBack} className="p-2 rounded-xl glass hover:bg-slate-800/80 transition-colors">
            <ArrowLeft size={18} />
          </button>
        )}
        <div>
          <h1
            className="text-xl md:text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onDashboard}
          >
            <span className="gradient-text bg-gradient-to-r from-blue-400 to-violet-400">Dev</span>
            <span className="text-slate-100">Drill</span>
          </h1>
          {screen !== 'dashboard' && (
            <p className="text-xs text-slate-500 mt-0.5">
              {screen === 'practice' && selectedTopic}
              {screen === 'exam-config' && 'Exam Setup'}
              {screen === 'exam' && 'Exam Mode'}
              {screen === 'results' && 'Results'}
              {screen === 'bookmarks' && 'Bookmarks'}
            </p>
          )}
        </div>
      </div>
      <div className="hidden md:flex items-center gap-1.5 text-[11px] text-slate-600">
        <Keyboard size={12} />
        <span>1-4</span>
        <span className="text-slate-700">answer</span>
        <span className="mx-1">|</span>
        <span>Arrow keys</span>
        <span className="text-slate-700">navigate</span>
        <span className="mx-1">|</span>
        <span>B</span>
        <span className="text-slate-700">bookmark</span>
      </div>
    </header>
  );
}

function StatsBar({ totalQuestions, masteredCount, streak, bestStreak }) {
  const stats = [
    { icon: Hash, label: 'Questions', value: totalQuestions, color: 'text-blue-400' },
    { icon: Brain, label: 'Mastered', value: masteredCount, color: 'text-emerald-400' },
    { icon: Flame, label: 'Streak', value: `${streak}d`, color: 'text-orange-400' },
    { icon: Zap, label: 'Best', value: `${bestStreak}d`, color: 'text-yellow-400' },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
      {stats.map(s => (
        <div key={s.label} className="glass rounded-xl p-3 md:p-4">
          <div className="flex items-center gap-2 mb-1">
            <s.icon size={14} className={s.color} />
            <span className="text-[11px] text-slate-500 uppercase tracking-wider">{s.label}</span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-slate-100">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

function TopicCard({ topic, meta, count, mastered, onClick }) {
  const IconComp = ICON_MAP[meta.icon];
  const pct = count > 0 ? Math.round((mastered / count) * 100) : 0;
  return (
    <button
      onClick={onClick}
      className={`glass rounded-2xl p-4 md:p-5 text-left hover:bg-slate-800/80 transition-all group border-l-2 ${meta.borderAccent}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${meta.gradient} text-white`}>
          {IconComp && <IconComp size={20} />}
        </div>
        <span className="text-[11px] text-slate-500">{count} Qs</span>
      </div>
      <h3 className="font-semibold text-sm text-slate-200 mb-2 group-hover:text-white transition-colors">{topic}</h3>
      <div className="w-full bg-slate-800 rounded-full h-1.5 mb-1">
        <div className={`h-full rounded-full bg-gradient-to-r ${meta.gradient} transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[10px] text-slate-500">{mastered}/{count} mastered</span>
    </button>
  );
}

function Dashboard({ stats, masteredIds, onSelectTopic, onStartExam, onBookmarks }) {
  const topics = Object.keys(TOPIC_META);
  const topicCounts = {};
  const topicMastered = {};
  topics.forEach(t => {
    const qs = INTERVIEW_QUESTIONS.filter(q => q.topic === t);
    topicCounts[t] = qs.length;
    topicMastered[t] = qs.filter(q => masteredIds.includes(q.id)).length;
  });

  return (
    <div className="animate-fadeIn">
      <StatsBar
        totalQuestions={INTERVIEW_QUESTIONS.length}
        masteredCount={masteredIds.length}
        streak={stats.currentStreak}
        bestStreak={stats.bestStreak}
      />
      <div className="flex gap-3 mb-6">
        <button
          onClick={onStartExam}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
        >
          <Target size={16} /> Start Exam
        </button>
        <button
          onClick={onBookmarks}
          className="py-3 px-4 rounded-xl glass hover:bg-slate-800/80 transition-colors text-sm font-medium text-slate-300 flex items-center gap-2"
        >
          <Bookmark size={16} /> Bookmarks
        </button>
      </div>
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Topics</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {topics.map(t => (
          <TopicCard
            key={t}
            topic={t}
            meta={TOPIC_META[t]}
            count={topicCounts[t]}
            mastered={topicMastered[t]}
            onClick={() => onSelectTopic(t)}
          />
        ))}
      </div>
    </div>
  );
}

function ExamConfig({ onStart }) {
  const [count, setCount] = useState(20);
  const [topic, setTopic] = useState('All');
  const [timerEnabled, setTimerEnabled] = useState(true);

  const topics = ['All', ...Object.keys(TOPIC_META)];
  const available = topic === 'All'
    ? INTERVIEW_QUESTIONS.length
    : INTERVIEW_QUESTIONS.filter(q => q.topic === topic).length;

  return (
    <div className="animate-fadeIn max-w-lg mx-auto">
      <div className="glass rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600">
            <Settings size={20} className="text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-100">Exam Configuration</h2>
            <p className="text-xs text-slate-500">Customize your exam session</p>
          </div>
        </div>

        <div className="mb-5">
          <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">Questions</label>
          <div className="flex gap-2">
            {[10, 20, 30].map(n => (
              <button
                key={n}
                onClick={() => setCount(Math.min(n, available))}
                className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  count === n
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                    : 'glass text-slate-400 hover:text-slate-200'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-5">
          <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">Topic</label>
          <div className="flex flex-wrap gap-2">
            {topics.map(t => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  topic === t
                    ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                    : 'glass text-slate-400 hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-slate-600 mt-1.5">{available} questions available</p>
        </div>

        <div className="mb-6">
          <label className="text-xs text-slate-400 uppercase tracking-wider mb-2 block">Timer (30s per question)</label>
          <div className="flex gap-2">
            <button
              onClick={() => setTimerEnabled(true)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                timerEnabled
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                  : 'glass text-slate-400 hover:text-slate-200'
              }`}
            >
              <Clock size={14} /> On
            </button>
            <button
              onClick={() => setTimerEnabled(false)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                !timerEnabled
                  ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white'
                  : 'glass text-slate-400 hover:text-slate-200'
              }`}
            >
              Off
            </button>
          </div>
        </div>

        <button
          onClick={() => onStart({ count: Math.min(count, available), topic, timerEnabled, timerSeconds: 30 })}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm hover:from-emerald-400 hover:to-green-500 transition-all flex items-center justify-center gap-2"
        >
          <Play size={16} /> Start Exam
        </button>
      </div>
    </div>
  );
}

function TimerDisplay({ timeLeft, total }) {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / total) * circumference;
  const isLow = timeLeft <= 5;

  return (
    <div className="flex items-center gap-2">
      <svg width="48" height="48" className="-rotate-90">
        <circle cx="24" cy="24" r={radius} fill="none" stroke="rgb(30 41 59)" strokeWidth="3" />
        <circle
          cx="24" cy="24" r={radius} fill="none"
          stroke={isLow ? 'rgb(239 68 68)' : 'rgb(99 102 241)'}
          strokeWidth="3" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          className="transition-all duration-1000 ease-linear"
        />
      </svg>
      <span className={`text-sm font-bold tabular-nums ${isLow ? 'text-red-400' : 'text-slate-300'}`}>
        {timeLeft}s
      </span>
    </div>
  );
}

function OptionButton({ index, text, selectedOption, correctOption, onSelect }) {
  const isAnswered = selectedOption !== null;
  const isSelected = selectedOption === index;
  const isCorrect = correctOption === index;

  let style = 'glass text-slate-300 hover:bg-slate-800/80 hover:border-slate-600 cursor-pointer';
  if (isAnswered) {
    if (isCorrect) {
      style = 'bg-emerald-500/15 border-emerald-500/50 text-emerald-300';
    } else if (isSelected && !isCorrect) {
      style = 'bg-red-500/15 border-red-500/50 text-red-300';
    } else {
      style = 'glass text-slate-600 opacity-60';
    }
  }

  return (
    <button
      onClick={() => !isAnswered && onSelect(index)}
      disabled={isAnswered}
      className={`w-full flex items-start gap-3 p-3.5 rounded-xl border transition-all text-left ${style} ${isAnswered ? 'cursor-default' : ''}`}
    >
      <span className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
        isAnswered && isCorrect
          ? 'bg-emerald-500 text-white'
          : isAnswered && isSelected && !isCorrect
            ? 'bg-red-500 text-white'
            : 'bg-slate-800 text-slate-400'
      }`}>
        {isAnswered && isCorrect ? <CheckCircle2 size={14} /> : isAnswered && isSelected ? <XCircle size={14} /> : OPTION_LABELS[index]}
      </span>
      <span className="text-sm leading-relaxed pt-0.5">{text}</span>
    </button>
  );
}

function QuestionCard({ question, selectedOption, topicMeta, isBookmarked, onToggleBookmark, onSelectOption, children }) {
  const diff = difficultyConfig[question.difficulty] || difficultyConfig.medium;
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === question.correctOption;

  return (
    <div className="animate-fadeIn max-w-2xl mx-auto">
      <div className={`glass rounded-2xl overflow-hidden border-l-2 ${topicMeta?.borderAccent || 'border-slate-600'}`}>
        <div className="p-6 md:p-8">
          {/* Badges */}
          <div className="flex items-center gap-2 mb-5 flex-wrap">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${topicMeta?.bgAccent || 'bg-slate-700'} ${topicMeta?.textAccent || 'text-slate-300'}`}>
              {question.topic}
            </span>
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${diff.bg} ${diff.text} border ${diff.border}`}>
              {diff.label}
            </span>
            {isAnswered && (
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest ${
                isCorrect ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'
              }`}>
                {isCorrect ? 'Correct' : 'Wrong'}
              </span>
            )}
            {onToggleBookmark && (
              <button onClick={onToggleBookmark} className="ml-auto p-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                {isBookmarked
                  ? <BookmarkCheck size={16} className="text-amber-400" />
                  : <Bookmark size={16} className="text-slate-600 hover:text-slate-400" />
                }
              </button>
            )}
          </div>

          {/* Question */}
          <h2 className="text-lg md:text-xl font-semibold text-slate-100 leading-relaxed mb-6">
            {question.scenario}
          </h2>

          {/* MCQ Options */}
          <div className="space-y-2.5 mb-4">
            {question.options.map((opt, i) => (
              <OptionButton
                key={i}
                index={i}
                text={opt}
                selectedOption={selectedOption}
                correctOption={question.correctOption}
                onSelect={onSelectOption}
              />
            ))}
          </div>

          {/* Detailed Answer (after selection) */}
          {isAnswered && (
            <div className="animate-slideUp mt-5">
              <div className={`p-5 rounded-xl bg-slate-800/60 border-l-2 ${topicMeta?.borderAccent || 'border-blue-500'}`}>
                <p className="text-slate-300 leading-relaxed text-sm mb-3">
                  <span className="font-semibold text-slate-100">Explanation: </span>
                  {question.answer}
                </p>
                <p className={`text-xs font-medium ${topicMeta?.textAccent || 'text-blue-400'}`}>
                  Pro-Tip: {question.tips}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 border-t border-slate-700/50 bg-slate-900/40">
          {children}
        </div>
      </div>
    </div>
  );
}

function ResultsScreen({ score, total, onRetry, onDashboard }) {
  const pct = Math.round((score / total) * 100);
  const grade = getGrade(pct);
  return (
    <div className="animate-scaleIn max-w-md mx-auto">
      <div className="glass rounded-2xl p-8 text-center">
        <Trophy size={56} className="mx-auto text-yellow-400 mb-4" />
        <h2 className="text-2xl font-bold text-slate-100 mb-2">Exam Complete!</h2>

        <div className={`text-7xl font-black mb-1 ${grade.color}`}>{grade.letter}</div>
        <div className="text-3xl font-bold text-slate-200 mb-2">{score}/{total}</div>
        <div className="text-xs text-slate-500 mb-4">{pct}% correct</div>

        <p className="text-sm text-slate-400 mb-8">{grade.msg}</p>

        <div className="flex gap-3">
          <button
            onClick={onRetry}
            className="flex-1 py-3 rounded-xl glass hover:bg-slate-800/80 transition-colors text-sm font-semibold text-slate-300 flex items-center justify-center gap-2"
          >
            <RotateCcw size={14} /> Retry
          </button>
          <button
            onClick={onDashboard}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
          >
            <Home size={14} /> Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

function BookmarksScreen({ bookmarkedIds, questions, onRemove, onDashboard }) {
  const bookmarked = questions.filter(q => bookmarkedIds.includes(q.id));

  if (bookmarked.length === 0) {
    return (
      <div className="animate-fadeIn max-w-md mx-auto text-center py-16">
        <Bookmark size={48} className="mx-auto text-slate-700 mb-4" />
        <h2 className="text-lg font-semibold text-slate-300 mb-2">No Bookmarks Yet</h2>
        <p className="text-sm text-slate-500 mb-6">Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 text-xs">B</kbd> during practice to bookmark questions.</p>
        <button onClick={onDashboard} className="px-6 py-2.5 rounded-xl glass hover:bg-slate-800/80 text-sm font-medium text-slate-300 transition-colors">
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn max-w-2xl mx-auto">
      <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
        {bookmarked.length} Bookmarked Question{bookmarked.length !== 1 ? 's' : ''}
      </h2>
      <div className="space-y-3">
        {bookmarked.map(q => {
          const meta = TOPIC_META[q.topic];
          const diff = difficultyConfig[q.difficulty] || difficultyConfig.medium;
          return (
            <div key={q.id} className={`glass rounded-xl p-4 border-l-2 ${meta?.borderAccent || 'border-slate-600'}`}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${meta?.bgAccent || 'bg-slate-700'} ${meta?.textAccent || 'text-slate-300'}`}>
                      {q.topic}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${diff.bg} ${diff.text}`}>
                      {diff.label}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200 mb-2">{q.scenario}</p>
                  <p className="text-xs text-slate-400">{q.answer}</p>
                </div>
                <button onClick={() => onRemove(q.id)} className="p-1.5 rounded-lg hover:bg-slate-800 transition-colors shrink-0">
                  <BookmarkCheck size={16} className="text-amber-400" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// --- Main App ---
function App() {
  // Navigation
  const [screen, setScreen] = useState('dashboard');
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // null = unanswered, 0-3 = picked

  // Exam
  const [examQuestions, setExamQuestions] = useState([]);
  const [examScore, setExamScore] = useState(0);
  const [examConfig, setExamConfig] = useState({ count: 20, topic: 'All', timerEnabled: true, timerSeconds: 30 });
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);

  // Persisted
  const [masteredIds, setMasteredIds] = useLocalStorage('devdrill_mastered', []);
  const [bookmarkedIds, setBookmarkedIds] = useLocalStorage('devdrill_bookmarks', []);
  const [stats, setStats] = useLocalStorage('devdrill_stats', {
    totalAnswered: 0,
    currentStreak: 0,
    bestStreak: 0,
    lastActiveDate: null,
  });

  // Streak tracking on load
  useEffect(() => {
    const d = today();
    setStats(prev => {
      if (prev.lastActiveDate === d) return prev;
      if (prev.lastActiveDate === null) {
        return { ...prev, currentStreak: 1, bestStreak: Math.max(prev.bestStreak, 1), lastActiveDate: d };
      }
      const last = new Date(prev.lastActiveDate);
      const now = new Date(d);
      const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));
      if (diffDays === 1) {
        const newStreak = prev.currentStreak + 1;
        return { ...prev, currentStreak: newStreak, bestStreak: Math.max(prev.bestStreak, newStreak), lastActiveDate: d };
      }
      return { ...prev, currentStreak: 1, bestStreak: Math.max(prev.bestStreak, 1), lastActiveDate: d };
    });
  }, []);

  // Current questions based on mode
  const practiceQuestions = selectedTopic
    ? INTERVIEW_QUESTIONS.filter(q => q.topic === selectedTopic)
    : INTERVIEW_QUESTIONS;

  const currentQuestions = screen === 'exam' ? examQuestions : practiceQuestions;
  const q = currentQuestions[currentIdx];
  const topicMeta = q ? TOPIC_META[q.topic] : null;
  const isAnswered = selectedOption !== null;

  // Timer for exam mode — runs only while unanswered
  useEffect(() => {
    if (screen === 'exam' && examConfig.timerEnabled && !isAnswered) {
      setTimeLeft(examConfig.timerSeconds);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [screen, currentIdx, isAnswered, examConfig.timerEnabled, examConfig.timerSeconds]);

  // Auto-select "wrong" when timer hits 0 (no option picked)
  useEffect(() => {
    if (screen === 'exam' && examConfig.timerEnabled && timeLeft === 0 && !isAnswered) {
      // select -1 to indicate "timed out" — treat as wrong
      setSelectedOption(-1);
      clearInterval(timerRef.current);
    }
  }, [timeLeft, screen, examConfig.timerEnabled, isAnswered]);

  // Navigation handlers
  const goToDashboard = useCallback(() => {
    setScreen('dashboard');
    setCurrentIdx(0);
    setSelectedOption(null);
    setSelectedTopic(null);
    clearInterval(timerRef.current);
  }, []);

  const handleSelectTopic = useCallback((topic) => {
    setSelectedTopic(topic);
    setCurrentIdx(0);
    setSelectedOption(null);
    setScreen('practice');
  }, []);

  const handleBack = useCallback(() => {
    goToDashboard();
  }, [goToDashboard]);

  // Exam handlers
  const handleStartExam = useCallback((config) => {
    const pool = config.topic === 'All'
      ? [...INTERVIEW_QUESTIONS]
      : INTERVIEW_QUESTIONS.filter(q => q.topic === config.topic);
    const shuffled = pool.sort(() => 0.5 - Math.random());
    setExamQuestions(shuffled.slice(0, config.count));
    setExamConfig(config);
    setCurrentIdx(0);
    setExamScore(0);
    setSelectedOption(null);
    setScreen('exam');
  }, []);

  // When user selects an MCQ option (practice or exam)
  const handleSelectOption = useCallback((optionIdx) => {
    if (selectedOption !== null) return; // already answered
    setSelectedOption(optionIdx);
    clearInterval(timerRef.current);

    const correct = q && optionIdx === q.correctOption;

    // Track stats
    setStats(prev => ({ ...prev, totalAnswered: prev.totalAnswered + 1 }));

    // Auto-master on correct answer
    if (correct && q) {
      setMasteredIds(prev => prev.includes(q.id) ? prev : [...prev, q.id]);
    }

    // Exam scoring
    if (screen === 'exam' && correct) {
      setExamScore(s => s + 1);
    }
  }, [selectedOption, q, screen, setStats, setMasteredIds]);

  // Go to next question (used by both practice and exam after answering)
  const handleNext = useCallback(() => {
    if (screen === 'exam') {
      if (currentIdx + 1 < examQuestions.length) {
        setCurrentIdx(c => c + 1);
        setSelectedOption(null);
      } else {
        setScreen('results');
      }
    } else {
      setCurrentIdx(prev => (prev + 1) % practiceQuestions.length);
      setSelectedOption(null);
    }
  }, [screen, currentIdx, examQuestions.length, practiceQuestions.length]);

  const handlePrevPractice = useCallback(() => {
    setCurrentIdx(prev => (prev - 1 + practiceQuestions.length) % practiceQuestions.length);
    setSelectedOption(null);
  }, [practiceQuestions.length]);

  const toggleBookmark = useCallback(() => {
    if (!q) return;
    setBookmarkedIds(prev =>
      prev.includes(q.id) ? prev.filter(id => id !== q.id) : [...prev, q.id]
    );
  }, [q, setBookmarkedIds]);

  // Keyboard shortcuts
  const keyHandlers = {
    '1': () => {
      if ((screen === 'practice' || screen === 'exam') && !isAnswered && q) handleSelectOption(0);
    },
    '2': () => {
      if ((screen === 'practice' || screen === 'exam') && !isAnswered && q) handleSelectOption(1);
    },
    '3': () => {
      if ((screen === 'practice' || screen === 'exam') && !isAnswered && q) handleSelectOption(2);
    },
    '4': () => {
      if ((screen === 'practice' || screen === 'exam') && !isAnswered && q) handleSelectOption(3);
    },
    'ArrowRight': () => {
      if (screen === 'practice' || (screen === 'exam' && isAnswered)) handleNext();
    },
    'ArrowLeft': () => {
      if (screen === 'practice') handlePrevPractice();
    },
    ' ': () => {
      if ((screen === 'practice' || screen === 'exam') && isAnswered) handleNext();
    },
    'Enter': () => {
      if ((screen === 'practice' || screen === 'exam') && isAnswered) handleNext();
    },
    'b': () => {
      if (screen === 'practice') toggleBookmark();
    },
    'B': () => {
      if (screen === 'practice') toggleBookmark();
    },
    'Escape': () => {
      goToDashboard();
    },
  };
  useKeyboardShortcuts(keyHandlers);

  // --- Render ---
  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Header
          screen={screen}
          selectedTopic={selectedTopic}
          onBack={handleBack}
          onDashboard={goToDashboard}
        />

        {screen === 'dashboard' && (
          <Dashboard
            stats={stats}
            masteredIds={masteredIds}
            onSelectTopic={handleSelectTopic}
            onStartExam={() => setScreen('exam-config')}
            onBookmarks={() => setScreen('bookmarks')}
          />
        )}

        {screen === 'exam-config' && (
          <ExamConfig onStart={handleStartExam} />
        )}

        {screen === 'practice' && q && (
          <>
            <div className="max-w-2xl mx-auto mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-slate-500">{currentIdx + 1} / {practiceQuestions.length}</span>
                <span className="text-xs text-slate-500">
                  {masteredIds.includes(q.id) && (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 size={12} /> Mastered
                    </span>
                  )}
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${topicMeta?.gradient || 'from-blue-500 to-violet-500'} transition-all duration-500`}
                  style={{ width: `${((currentIdx + 1) / practiceQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <QuestionCard
              question={q}
              selectedOption={selectedOption}
              topicMeta={topicMeta}
              isBookmarked={bookmarkedIds.includes(q.id)}
              onToggleBookmark={toggleBookmark}
              onSelectOption={handleSelectOption}
            >
              <div className="flex gap-3">
                <button
                  onClick={handlePrevPractice}
                  className="p-3 rounded-xl glass hover:bg-slate-800/80 transition-colors text-slate-400"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft size={18} />
                </button>
                {!isAnswered && (
                  <div className="flex-1 flex items-center justify-center text-xs text-slate-600">
                    Press 1-4 to answer
                  </div>
                )}
                {isAnswered && (
                  <button
                    onClick={handleNext}
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                  >
                    Next Question
                    <ChevronRight size={16} />
                    <span className="text-white/50 text-[10px]">Space</span>
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl glass hover:bg-slate-800/80 transition-colors text-slate-400"
                  title="Next (Right Arrow)"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </QuestionCard>
          </>
        )}

        {screen === 'exam' && q && (
          <>
            <div className="max-w-2xl mx-auto mb-4">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-slate-500">Question {currentIdx + 1} of {examQuestions.length}</span>
                {examConfig.timerEnabled && !isAnswered && (
                  <TimerDisplay timeLeft={timeLeft} total={examConfig.timerSeconds} />
                )}
                {isAnswered && (
                  <span className={`text-xs font-semibold ${
                    selectedOption === q.correctOption ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {selectedOption === q.correctOption ? 'Correct!' : selectedOption === -1 ? 'Time\'s Up!' : 'Incorrect'}
                  </span>
                )}
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500"
                  style={{ width: `${((currentIdx + 1) / examQuestions.length) * 100}%` }}
                />
              </div>
            </div>

            <QuestionCard
              question={q}
              selectedOption={selectedOption}
              topicMeta={topicMeta}
              onSelectOption={handleSelectOption}
            >
              {isAnswered ? (
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:from-violet-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2"
                >
                  {currentIdx + 1 < examQuestions.length ? 'Next Question' : 'See Results'}
                  <ChevronRight size={16} />
                  <span className="text-white/50 text-[10px]">Space</span>
                </button>
              ) : (
                <div className="flex items-center justify-center text-xs text-slate-600 py-2">
                  Select an answer above (1-4)
                </div>
              )}
            </QuestionCard>
          </>
        )}

        {screen === 'results' && (
          <ResultsScreen
            score={examScore}
            total={examQuestions.length}
            onRetry={() => setScreen('exam-config')}
            onDashboard={goToDashboard}
          />
        )}

        {screen === 'bookmarks' && (
          <BookmarksScreen
            bookmarkedIds={bookmarkedIds}
            questions={INTERVIEW_QUESTIONS}
            onRemove={(id) => setBookmarkedIds(prev => prev.filter(bid => bid !== id))}
            onDashboard={goToDashboard}
          />
        )}
      </div>
    </div>
  );
}

export default App;

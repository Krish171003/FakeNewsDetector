import pandas as pd
import re
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics import accuracy_score
import joblib

# 1. Load both datasets
true_df = pd.read_csv("../data/True.csv")
fake_df = pd.read_csv("../data/Fake.csv")

# 2. Add labels
true_df["label"] = "REAL"
fake_df["label"] = "FAKE"

# 3. Combine them
df = pd.concat([true_df, fake_df], ignore_index=True)

# 4. Shuffle
df = df.sample(frac=1, random_state=42).reset_index(drop=True)

# 5. Combine title + text, then clean
df["text"] = (df["title"].fillna("") + " " + df["text"].fillna("")).apply(lambda x: re.sub(r"\s+", " ", x.strip()))

X = df["text"]
y = df["label"].map({"REAL": 0, "FAKE": 1})

# 6. Vectorize
vectorizer = TfidfVectorizer(stop_words="english", max_df=0.7)
X_vec = vectorizer.fit_transform(X)

# 7. Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X_vec, y, test_size=0.2, random_state=42)

# 8. Train Logistic Regression model
model = LogisticRegression()
model.fit(X_train, y_train)

# 9. Evaluate
y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))

# Save model and vectorizer in current directory
import joblib

joblib.dump(model, "fake_news_model.pkl")
joblib.dump(vectorizer, "vectorizer.pkl")

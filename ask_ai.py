import os
from openai import OpenAI

def main():
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key:
        print("Ошибка: переменная OPENAI_API_KEY не задана.")
        return

    client = OpenAI(api_key=api_key)

    project = "ИИ-сервис для анализа медицинских документов и консилиума врачей"
    description = project

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "Ты помогаешь придумывать названия для проектов. Предложи ровно 3 варианта названия, пронумерованных 1-3.",
            },
            {
                "role": "user",
                "content": f"Придумай 3 названия для проекта: {description}",
            },
        ],
    )

    print("\nВарианты названий:")
    print(response.choices[0].message.content)


if __name__ == "__main__":
    main()
